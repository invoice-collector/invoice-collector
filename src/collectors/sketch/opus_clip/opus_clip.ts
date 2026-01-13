
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OpusClipCollector extends SketchCollector {

    static CONFIG = {
        id: "opus_clip",
        name: "Opus Clip",
        description: "i18n.collectors.opus_clip.description",
        version: "0",
        website: "https://pay.opus.pro/p/session/live_YWNjdF8xTXhzVFdKdHY4TlVvRnlJLF9RQjc5WnNSOE5aYXpuNGF5YlJpQVRpNW00TTVtNm1M0100R3F9WgCp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2841412.jpg",
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
        loginUrl: "https://pay.opus.pro/p/session/live_YWNjdF8xTXhzVFdKdHY4TlVvRnlJLF9RQjc5WnNSOE5aYXpuNGF5YlJpQVRpNW00TTVtNm1M0100R3F9WgCp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpusClipCollector.CONFIG);
    }
}
