import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HexisGraphicsCollector extends SketchCollector {

    static CONFIG = {
        id: "hexis_graphics",
        name: "Hexis Graphics",
        description: "i18n.collectors.hexis_graphics.description",
        version: "0",
        website: "https://www.hexis-graphics.com",
        logo: "https://www.hexis-graphics.com/wp-content/themes/Hexis/images/hexis_logo.svg",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HexisGraphicsCollector.CONFIG);
    }
}
