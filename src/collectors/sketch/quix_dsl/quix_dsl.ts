
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuixDslCollector extends SketchCollector {

    static CONFIG = {
        id: "quix_dsl",
        name: "QUiX DSL",
        description: "i18n.collectors.quix_dsl.description",
        version: "0",
        website: "https://kundenportal.myquix.de/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9249.jpg",
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
        entryUrl: "https://kundenportal.myquix.de/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuixDslCollector.CONFIG);
    }
}
