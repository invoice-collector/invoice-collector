
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpotifyCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "spotify_canada",
        name: "Spotify Canada",
        description: "i18n.collectors.spotify_canada.description",
        version: "0",
        website: "https://www.spotify.com/ca-en/account/subscription/receipt/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/586002.jpg",
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
        loginUrl: "https://www.spotify.com/ca-en/account/subscription/receipt/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpotifyCanadaCollector.CONFIG);
    }
}
