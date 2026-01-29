
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SmartPodcastPlayerCollector extends SketchCollector {

    static CONFIG = {
        id: "smart_podcast_player",
        name: "Smart Podcast Player",
        description: "i18n.collectors.smart_podcast_player.description",
        version: "0",
        website: "https://my.smartpodcastplayer.com/login#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48262.jpg",
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
        loginUrl: "https://my.smartpodcastplayer.com/login#/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SmartPodcastPlayerCollector.CONFIG);
    }
}
