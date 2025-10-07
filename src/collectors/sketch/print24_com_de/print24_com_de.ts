
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Print24ComDeCollector extends SketchCollector {

    static CONFIG = {
        id: "print24_com_de",
        name: "print24.com - de",
        description: "i18n.collectors.print24_com_de.description",
        version: "0",
        website: "https://print24.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7332.jpg",
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
        entryUrl: "https://print24.com/de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Print24ComDeCollector.CONFIG);
    }
}
