
import { SketchCollector } from '../../sketchCollector';

export class TrainlineCollector extends SketchCollector {

    static CONFIG = {
        id: "trainline",
        name: "Trainline",
        description: "i18n.collectors.trainline.description",
        version: "0",
        website: "http://www.thetrainline.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26987.jpg",
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
        entryUrl: "http://www.thetrainline.com",
    }

    constructor() {
        super(TrainlineCollector.CONFIG);
    }
}
