
import { SketchCollector } from '../../sketchCollector';

export class YouExecLlcCollector extends SketchCollector {

    static CONFIG = {
        id: "you_exec_llc",
        name: "You Exec LLC",
        description: "i18n.collectors.you_exec_llc.description",
        version: "0",
        website: "https://plus.youexec.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/650625.jpg",
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
        entryUrl: "https://plus.youexec.com/login",
    }

    constructor() {
        super(YouExecLlcCollector.CONFIG);
    }
}
