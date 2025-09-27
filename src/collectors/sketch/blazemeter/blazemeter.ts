
import { SketchCollector } from '../../sketchCollector';

export class BlazemeterCollector extends SketchCollector {

    static CONFIG = {
        id: "blazemeter",
        name: "blazemeter",
        description: "i18n.collectors.blazemeter.description",
        version: "0",
        website: "https://a.blazemeter.com/app/#/settings/accounts/352924/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156401.jpg",
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
        entryUrl: "https://a.blazemeter.com/app/#/settings/accounts/352924/billing",
    }

    constructor() {
        super(BlazemeterCollector.CONFIG);
    }
}
