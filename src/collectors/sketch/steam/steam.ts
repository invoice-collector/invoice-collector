
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SteamCollector extends SketchCollector {

    static CONFIG = {
        id: "steam",
        name: "Steam",
        description: "i18n.collectors.steam.description",
        version: "0",
        website: "https://store.steampowered.com//login/?redir=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/42725.jpg",
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
        entryUrl: "https://store.steampowered.com//login/?redir=",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SteamCollector.CONFIG);
    }
}
