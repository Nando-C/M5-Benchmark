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
        posterImg = { image: base64Img, width: 250, margin: [0, 0, 0, 30] }
    }
    const printer = new PdfPrinter(fonts)

    const docDefinition = {
        content: [
            {
                text: `${media.Title}`,
                style: 'header',
                margin: [0, 0, 0, 10]
            },
            {
                style: 'tableExample',
                table: {
                    widths: ['*', 10, '*'],
                    body: [
                        [ {text: 'Poster', style: 'tableHeaders'}, '', {text: 'Information', style: 'tableHeaders'}],
                        [
                            posterImg ,
                            '',
                            {
                                text: [
                                    {text: `Title: ${media.Title}\n\n`},
                                    {text: `Year: ${media.Year}\n\n`},
                                    {text: `Category: ${media.Type}\n\n`}
                                ]
                            }
                        ]
                    ]
                },
                layout: 'noBorders'
            },
        ],
        styles: {
            header: {
                fontSize: 16,
                bold: true,
            },
            subheader: {
                fontSize: 12,
			    bold: true,
                margin: [5, 5, 5, 10]
            },
            tableExample: {
                margin: [5, 5, 5, 10]
            },
            tableHeaders: {
                bold: true,
                alignment: 'center',
                margin: [0, 10, 0, 10]
            }
        }
    }

    const pdfReadableStream = printer.createPdfKitDocument(docDefinition, {})
    pdfReadableStream.end()
    return pdfReadableStream
}