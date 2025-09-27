
import { SketchCollector } from '../../sketchCollector';

export class VwpfsNlCollector extends SketchCollector {

    static CONFIG = {
        id: "vwpfs_nl",
        name: "VWPFS NL",
        description: "i18n.collectors.vwpfs_nl.description",
        version: "0",
        website: "https://e-invoice.vwpfs.nl/vwpfs/welcome.html?9d9sgshrkor2ntdie9fr72eerc=g862dns1ajil4q3mrol6rl99gr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695468.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://e-invoice.vwpfs.nl/vwpfs/welcome.html?9d9sgshrkor2ntdie9fr72eerc=g862dns1ajil4q3mrol6rl99gr",
    }

    constructor() {
        super(VwpfsNlCollector.CONFIG);
    }
}
