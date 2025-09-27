
import { SketchCollector } from '../../sketchCollector';

export class DemioCollector extends SketchCollector {

    static CONFIG = {
        id: "demio",
        name: "Demio",
        description: "i18n.collectors.demio.description",
        version: "0",
        website: "https://my.demio.com/manage/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241366.jpg",
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
        entryUrl: "https://my.demio.com/manage/settings/billing",
    }

    constructor() {
        super(DemioCollector.CONFIG);
    }
}
