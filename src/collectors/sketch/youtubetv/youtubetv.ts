
import { SketchCollector } from '../../sketchCollector';

export class YoutubetvCollector extends SketchCollector {

    static CONFIG = {
        id: "youtubetv",
        name: "YouTubeTV",
        description: "i18n.collectors.youtubetv.description",
        version: "0",
        website: "https://accounts.google.com/AccountChooser/signinchooser?service=youtube&uilel=0&hl=en&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26skip_identity_prompt%3DTrue%26hl%3Den%26next%3Dhttps%253A%252F%252Ftv.yo",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52297.jpg",
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
        entryUrl: "https://accounts.google.com/AccountChooser/signinchooser?service=youtube&uilel=0&hl=en&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26skip_identity_prompt%3DTrue%26hl%3Den%26next%3Dhttps%253A%252F%252Ftv.yo",
    }

    constructor() {
        super(YoutubetvCollector.CONFIG);
    }
}
