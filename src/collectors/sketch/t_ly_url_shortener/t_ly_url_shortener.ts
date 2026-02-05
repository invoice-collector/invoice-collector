
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TLyUrlShortenerCollector extends SketchCollector {

    static CONFIG = {
        id: "t_ly_url_shortener",
        name: "t.ly (URL-Shortener)",
        description: "i18n.collectors.t_ly_url_shortener.description",
        version: "0",
        website: "https://t.ly/settings/teams/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1334828.jpg",
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
        loginUrl: "https://t.ly/settings/teams/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TLyUrlShortenerCollector.CONFIG);
    }
}
