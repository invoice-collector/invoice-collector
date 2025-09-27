
import { SketchCollector } from '../../sketchCollector';

export class FcMotoCollector extends SketchCollector {

    static CONFIG = {
        id: "fc_moto",
        name: "FC-Moto",
        description: "i18n.collectors.fc_moto.description",
        version: "0",
        website: "https://www.fc-moto.de/epages/fcm.sf/de_DE/?ObjectID=139105782&ViewAction=ViewOrderTracking",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132282.jpg",
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
        entryUrl: "https://www.fc-moto.de/epages/fcm.sf/de_DE/?ObjectID=139105782&ViewAction=ViewOrderTracking",
    }

    constructor() {
        super(FcMotoCollector.CONFIG);
    }
}
