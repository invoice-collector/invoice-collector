
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VabUnifiedPostCollector extends SketchCollector {

    static CONFIG = {
        id: "vab_unified_post",
        name: "VAB Unified Post",
        description: "i18n.collectors.vab_unified_post.description",
        version: "0",
        website: "https://vab-documents.nxt.unifiedpost.com/link/document/c/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698825.jpg",
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
        loginUrl: "https://vab-documents.nxt.unifiedpost.com/link/document/c/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VabUnifiedPostCollector.CONFIG);
    }
}
