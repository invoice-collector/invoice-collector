
import { SketchCollector } from '../../sketchCollector';

export class SignalIdunaCollector extends SketchCollector {

    static CONFIG = {
        id: "signal_iduna",
        name: "Signal Iduna",
        description: "i18n.collectors.signal_iduna.description",
        version: "0",
        website: "https://sb-serviceframe.ui.signal-iduna.org/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526378.jpg",
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
        entryUrl: "https://sb-serviceframe.ui.signal-iduna.org/login",
    }

    constructor() {
        super(SignalIdunaCollector.CONFIG);
    }
}
