
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GreenfiberInternetCollector extends SketchCollector {

    static CONFIG = {
        id: "greenfiber_internet",
        name: "Greenfiber Internet",
        description: "i18n.collectors.greenfiber_internet.description",
        version: "0",
        website: "https://kundenportal.greenfiber.de/Greenfiber/MeineRechnungen.cms?ActiveID=1002",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1307654.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://kundenportal.greenfiber.de/Greenfiber/MeineRechnungen.cms?ActiveID=1002",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GreenfiberInternetCollector.CONFIG);
    }
}
