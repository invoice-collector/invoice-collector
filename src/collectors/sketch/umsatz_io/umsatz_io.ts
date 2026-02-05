
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UmsatzIoCollector extends SketchCollector {

    static CONFIG = {
        id: "umsatz_io",
        name: "Umsatz.io",
        description: "i18n.collectors.umsatz_io.description",
        version: "0",
        website: "https://app.umsatz.io/invitation?token=eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ing3MXJMT3NxNlpPSWVELWx5SXRaUkVlSnp3VVplRG5jcjZyLWtYZW5JRG8ifQ.eyJ0ZW5hbnRJZCI6IjhmY2Y3MTVmLTM5NTgtNGY4MS1iZGQwLTZlYzc4NDMwY2Q5MiIsImFjY291bnRJZCI6IjMyNjY0ZjdmLWZiOGUtNDcwM",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1545166.jpg",
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
        loginUrl: "https://app.umsatz.io/invitation?token=eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ing3MXJMT3NxNlpPSWVELWx5SXRaUkVlSnp3VVplRG5jcjZyLWtYZW5JRG8ifQ.eyJ0ZW5hbnRJZCI6IjhmY2Y3MTVmLTM5NTgtNGY4MS1iZGQwLTZlYzc4NDMwY2Q5MiIsImFjY291bnRJZCI6IjMyNjY0ZjdmLWZiOGUtNDcwM",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UmsatzIoCollector.CONFIG);
    }
}
