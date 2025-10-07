
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GlwizCollector extends SketchCollector {

    static CONFIG = {
        id: "glwiz",
        name: "GLWiz",
        description: "i18n.collectors.glwiz.description",
        version: "0",
        website: "https://www.glwiz.com/Pages/MyAccount-Information/MyAccount-Information.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593643.jpg",
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
        entryUrl: "https://www.glwiz.com/Pages/MyAccount-Information/MyAccount-Information.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GlwizCollector.CONFIG);
    }
}
