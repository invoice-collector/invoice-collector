
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DatapartCollector extends SketchCollector {

    static CONFIG = {
        id: "datapart",
        name: "Datapart",
        description: "i18n.collectors.datapart.description",
        version: "0",
        website: "https://mydatapart.de/dp_fs_message/account/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176236.jpg",
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
        entryUrl: "https://mydatapart.de/dp_fs_message/account/login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DatapartCollector.CONFIG);
    }
}
