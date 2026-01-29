
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AuchanDriveCollector extends SketchCollector {

    static CONFIG = {
        id: "auchan_drive",
        name: "Auchan Drive",
        description: "i18n.collectors.auchan_drive.description",
        version: "0",
        website: "http://www.auchandrive.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27502.jpg",
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
        loginUrl: "http://www.auchandrive.fr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AuchanDriveCollector.CONFIG);
    }
}
