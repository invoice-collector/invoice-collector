
import { SketchCollector } from '../../sketchCollector';

export class SecuofficeCollector extends SketchCollector {

    static CONFIG = {
        id: "secuoffice",
        name: "SecuOffice",
        description: "i18n.collectors.secuoffice.description",
        version: "0",
        website: "https://secuoffice.com/#/M/MRC_W87B9BGFZX6B6V8FGYEUMY890ASCOP/card-processing/invoices?sorting[0][propName]=created&sorting[0][asc]=false&grid=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1664951.jpg",
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
        entryUrl: "https://secuoffice.com/#/M/MRC_W87B9BGFZX6B6V8FGYEUMY890ASCOP/card-processing/invoices?sorting[0][propName]=created&sorting[0][asc]=false&grid=true",
    }

    constructor() {
        super(SecuofficeCollector.CONFIG);
    }
}
