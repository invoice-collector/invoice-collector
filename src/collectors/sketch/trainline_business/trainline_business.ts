
import { SketchCollector } from '../../sketchCollector';

export class TrainlineBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "trainline_business",
        name: "Trainline Business",
        description: "i18n.collectors.trainline_business.description",
        version: "0",
        website: "https://www.trainline.fr/organization/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/201079.jpg",
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
        entryUrl: "https://www.trainline.fr/organization/invoices",
    }

    constructor() {
        super(TrainlineBusinessCollector.CONFIG);
    }
}
