
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpotifyFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "spotify_france",
        name: "Spotify France",
        description: "i18n.collectors.spotify_france.description",
        version: "0",
        website: "https://accounts.spotify.com/en/login/?continue=https:%2F%2Fwww.spotify.com%2Ffr%2Faccount%2Foverview%2F&_locale=fr-FR",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138193.jpg",
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
        loginUrl: "https://accounts.spotify.com/en/login/?continue=https:%2F%2Fwww.spotify.com%2Ffr%2Faccount%2Foverview%2F&_locale=fr-FR",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SpotifyFranceCollector.CONFIG);
    }
}
