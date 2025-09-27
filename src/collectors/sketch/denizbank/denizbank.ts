
import { SketchCollector } from '../../sketchCollector';

export class DenizbankCollector extends SketchCollector {

    static CONFIG = {
        id: "denizbank",
        name: "DenizBank",
        description: "i18n.collectors.denizbank.description",
        version: "0",
        website: "https://ebanking.denizbank.de/Default.aspx?sID=8631632",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153913.jpg",
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
        entryUrl: "https://ebanking.denizbank.de/Default.aspx?sID=8631632",
    }

    constructor() {
        super(DenizbankCollector.CONFIG);
    }
}
