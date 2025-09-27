
import { SketchCollector } from '../../sketchCollector';

export class DogadoCollector extends SketchCollector {

    static CONFIG = {
        id: "dogado",
        name: "Dogado",
        description: "i18n.collectors.dogado.description",
        version: "0",
        website: "https://www.cloudpit.io/customer/tab/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3837.jpg",
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
        entryUrl: "https://www.cloudpit.io/customer/tab/invoices",
    }

    constructor() {
        super(DogadoCollector.CONFIG);
    }
}
