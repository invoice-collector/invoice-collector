
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PerplexityAiCollector extends SketchCollector {

    static CONFIG = {
        id: "perplexity_ai",
        name: "Perplexity.ai",
        description: "i18n.collectors.perplexity_ai.description",
        version: "0",
        website: "https://stripe.perplexity.ai/p/session/live_YWNjdF8xTjlZcUJHWndqcVBmeGtaLF9RM2R6MkhmTndyWTA4R2pQUHpFQ1gyb1BJVGcwaEZl01001FQMwif6",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2767739.jpg",
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
        loginUrl: "https://stripe.perplexity.ai/p/session/live_YWNjdF8xTjlZcUJHWndqcVBmeGtaLF9RM2R6MkhmTndyWTA4R2pQUHpFQ1gyb1BJVGcwaEZl01001FQMwif6",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PerplexityAiCollector.CONFIG);
    }
}
