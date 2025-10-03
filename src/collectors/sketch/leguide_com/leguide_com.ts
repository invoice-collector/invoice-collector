
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeguideComCollector extends SketchCollector {

    static CONFIG = {
        id: "leguide_com",
        name: "leGuide.com",
        description: "i18n.collectors.leguide_com.description",
        version: "0",
        website: "https://merchant.kelkoogroup.com/app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34982.jpg",
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
        entryUrl: "https://merchant.kelkoogroup.com/app/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeguideComCollector.CONFIG);
    }
}
