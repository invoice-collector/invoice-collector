
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TrovitCollector extends SketchCollector {

    static CONFIG = {
        id: "trovit",
        name: "trovit",
        description: "i18n.collectors.trovit.description",
        version: "0",
        website: "https://accounts.trovit.com/?cod=check_login&url=https%3A%2F%2Fhomes.trovit.com%2Findex.php%2Fcod.mail_preferences&language=en_US&",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33052.jpg",
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
        loginUrl: "https://accounts.trovit.com/?cod=check_login&url=https%3A%2F%2Fhomes.trovit.com%2Findex.php%2Fcod.mail_preferences&language=en_US&",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TrovitCollector.CONFIG);
    }
}
