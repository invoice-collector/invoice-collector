
import { SketchCollector } from '../../sketchCollector';

export class BsrBerlinerStadtreinigungCollector extends SketchCollector {

    static CONFIG = {
        id: "bsr_berliner_stadtreinigung",
        name: "BSR - Berliner Stadtreinigung",
        description: "i18n.collectors.bsr_berliner_stadtreinigung.description",
        version: "0",
        website: "https://kundenportal.bsr.de/bsr/services/kundenportal/BillPrintDocDownloadSet(PrintDocID=\'",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11682.jpg",
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
        entryUrl: "https://kundenportal.bsr.de/bsr/services/kundenportal/BillPrintDocDownloadSet(PrintDocID=\'",
    }

    constructor() {
        super(BsrBerlinerStadtreinigungCollector.CONFIG);
    }
}
