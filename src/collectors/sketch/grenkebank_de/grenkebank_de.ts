
import { SketchCollector } from '../../sketchCollector';

export class GrenkebankDeCollector extends SketchCollector {

    static CONFIG = {
        id: "grenkebank_de",
        name: "grenkebank.de",
        description: "i18n.collectors.grenkebank_de.description",
        version: "0",
        website: "https://www.onlinebanking-grenkebank.de/banking-business/portal?menuId=Postfach&token=6865410398368038915",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210280.jpg",
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
        entryUrl: "https://www.onlinebanking-grenkebank.de/banking-business/portal?menuId=Postfach&token=6865410398368038915",
    }

    constructor() {
        super(GrenkebankDeCollector.CONFIG);
    }
}
