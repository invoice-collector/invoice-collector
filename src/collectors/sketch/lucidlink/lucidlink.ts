
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LucidlinkCollector extends SketchCollector {

    static CONFIG = {
        id: "lucidlink",
        name: "LucidLink",
        description: "i18n.collectors.lucidlink.description",
        version: "0",
        website: "https://app.lucidlink.com/workspaces/068eb1ef-768f-43e7-9e14-8ca8500855c2/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4604362.jpg",
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
        loginUrl: "https://app.lucidlink.com/workspaces/068eb1ef-768f-43e7-9e14-8ca8500855c2/settings/billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LucidlinkCollector.CONFIG);
    }
}
