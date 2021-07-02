import PdfPrinter from 'pdfmake'
import striptags from 'striptags'
import axios from 'axios'

export const generatePDFReadableStream = async (media) => {
    const fonts = {
        Roboto: {
            normal: "Helvetica",
            bold: "Helvetica-Bold",
            italics: "Helvetica-Oblique",
            bolditalics: "Helvetica-Oblique",
        }
    }

    let posterImg = {}
    if(media.Poster) {
        const response = await axios.get(media.Poster, {
            responseType: "arraybuffer"
        })
        const blogCoverURLParts = media.Poster.split("/")
        const fileName = blogCoverURLParts[blogCoverURLParts.length -1]
        const [id, extension] = fileName.split(".")
        const base64 = response.data.toString("base64")
        const base64Img = `data:image/${extension};base64,${base64}`
        posterImg = { image: base64Img, width: 500, margin: [0, 0, 0, 30] }
    }
    const printer = new PdfPrinter(fonts)

    const docDefinition = {
        content: [
            
            posterImg,
            
            {
                text: `${media.Title}`,
                style: 'header'
            },
            {
                text: `by ${media.Year}`,
                style: 'subheader'
            },
            { 
               text: striptags(`${media.Type}`, [], '\n'),
               alignment: 'center' 
            }
            
        ],
        styles: {
            header: {
                fontSize: 16,
                bold: true,
            },
            subheader: {
                fontSize: 12,
			    bold: true,
            }
        }
    }

    const pdfReadableStream = printer.createPdfKitDocument(docDefinition, {})
    pdfReadableStream.end()
    return pdfReadableStream
}