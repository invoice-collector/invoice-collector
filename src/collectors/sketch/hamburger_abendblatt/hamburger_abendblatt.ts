
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HamburgerAbendblattCollector extends SketchCollector {

    static CONFIG = {
        id: "hamburger_abendblatt",
        name: "Hamburger Abendblatt",
        description: "i18n.collectors.hamburger_abendblatt.description",
        version: "0",
        website: "http://www.abo.abendblatt.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36012.jpg",
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
        entryUrl: "http://www.abo.abendblatt.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HamburgerAbendblattCollector.CONFIG);
    }
}
