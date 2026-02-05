
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GulpDeGutschriftstoolCollector extends SketchCollector {

    static CONFIG = {
        id: "gulp_de_gutschriftstool",
        name: "Gulp.de - Gutschriftstool",
        description: "i18n.collectors.gulp_de_gutschriftstool.description",
        version: "0",
        website: "https://www.gulp.de/gstool",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46457.jpg",
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
        loginUrl: "https://www.gulp.de/gstool",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GulpDeGutschriftstoolCollector.CONFIG);
    }
}
