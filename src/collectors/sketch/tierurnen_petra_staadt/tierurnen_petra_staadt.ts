
import { SketchCollector } from '../../sketchCollector';

export class TierurnenPetraStaadtCollector extends SketchCollector {

    static CONFIG = {
        id: "tierurnen_petra_staadt",
        name: "Tierurnen Petra Staadt",
        description: "i18n.collectors.tierurnen_petra_staadt.description",
        version: "0",
        website: "www.tierurnen-mit-herz.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479463.jpg",
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
        entryUrl: "www.tierurnen-mit-herz.de",
    }

    constructor() {
        super(TierurnenPetraStaadtCollector.CONFIG);
    }
}
