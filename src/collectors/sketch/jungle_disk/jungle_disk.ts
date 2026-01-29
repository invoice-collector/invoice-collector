
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JungleDiskCollector extends SketchCollector {

    static CONFIG = {
        id: "jungle_disk",
        name: "Jungle Disk",
        description: "i18n.collectors.jungle_disk.description",
        version: "0",
        website: "https://secure.jungledisk.com/secure/account/invoices.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8815.jpg",
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
        loginUrl: "https://secure.jungledisk.com/secure/account/invoices.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JungleDiskCollector.CONFIG);
    }
}
