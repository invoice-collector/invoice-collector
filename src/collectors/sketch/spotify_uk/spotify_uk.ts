
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpotifyUkCollector extends SketchCollector {

    static CONFIG = {
        id: "spotify_uk",
        name: "Spotify UK",
        description: "i18n.collectors.spotify_uk.description",
        version: "0",
        website: "https://accounts.spotify.com/en/login/?continue=https:%2F%2Fwww.spotify.com%2Fuk%2Faccount%2Foverview%2F&_locale=en-GB",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138194.jpg",
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
        entryUrl: "https://accounts.spotify.com/en/login/?continue=https:%2F%2Fwww.spotify.com%2Fuk%2Faccount%2Foverview%2F&_locale=en-GB",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpotifyUkCollector.CONFIG);
    }
}
