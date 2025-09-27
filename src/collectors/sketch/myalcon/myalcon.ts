
import { SketchCollector } from '../../sketchCollector';

export class MyalconCollector extends SketchCollector {

    static CONFIG = {
        id: "myalcon",
        name: "MyAlcon",
        description: "i18n.collectors.myalcon.description",
        version: "0",
        website: "https://order.myalcon.ca/alconCA/en_CA/CAD/visioncare/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4231160.jpg",
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
        entryUrl: "https://order.myalcon.ca/alconCA/en_CA/CAD/visioncare/invoices",
    }

    constructor() {
        super(MyalconCollector.CONFIG);
    }
}
