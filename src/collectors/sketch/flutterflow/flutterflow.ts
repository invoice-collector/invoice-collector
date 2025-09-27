
import { SketchCollector } from '../../sketchCollector';

export class FlutterflowCollector extends SketchCollector {

    static CONFIG = {
        id: "flutterflow",
        name: "Flutterflow",
        description: "i18n.collectors.flutterflow.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xSHFxbmVIV2pGbHg4MFNNLF9PVmpJWmFhdkRHbXR0SGdoWThRTmZqM1I3dDlJQnow0100RoTEsU3H",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2108656.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xSHFxbmVIV2pGbHg4MFNNLF9PVmpJWmFhdkRHbXR0SGdoWThRTmZqM1I3dDlJQnow0100RoTEsU3H",
    }

    constructor() {
        super(FlutterflowCollector.CONFIG);
    }
}
