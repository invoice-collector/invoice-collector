
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SyncroCollector extends SketchCollector {

    static CONFIG = {
        id: "syncro",
        name: "Syncro",
        description: "i18n.collectors.syncro.description",
        version: "0",
        website: "https://admin.syncromsp.com/users/sign_in?_ga=2.167324414.1585489120.1631954032-2027211550.1631954032",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/937752.jpg",
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
        entryUrl: "https://admin.syncromsp.com/users/sign_in?_ga=2.167324414.1585489120.1631954032-2027211550.1631954032",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SyncroCollector.CONFIG);
    }
}
