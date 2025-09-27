
import { SketchCollector } from '../../sketchCollector';

export class _1click2DslCollector extends SketchCollector {

    static CONFIG = {
        id: "1click2_dsl",
        name: "1click2 DSL",
        description: "i18n.collectors.1click2_dsl.description",
        version: "0",
        website: "http://www.1click2dsl.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9002.jpg",
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
        entryUrl: "http://www.1click2dsl.de",
    }

    constructor() {
        super(_1click2DslCollector.CONFIG);
    }
}
