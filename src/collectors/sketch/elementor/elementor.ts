
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElementorCollector extends SketchCollector {

    static CONFIG = {
        id: "elementor",
        name: "Elementor",
        description: "i18n.collectors.elementor.description",
        version: "0",
        website: "https://my.elementor.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167037.jpg",
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
        entryUrl: "https://my.elementor.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElementorCollector.CONFIG);
    }
}
