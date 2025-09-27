
import { SketchCollector } from '../../sketchCollector';

export class MxToolboxCollector extends SketchCollector {

    static CONFIG = {
        id: "mx_toolbox",
        name: "MX Toolbox",
        description: "i18n.collectors.mx_toolbox.description",
        version: "0",
        website: "https://mxtoolbox.com/Public/Login.aspx?page=pp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33064.jpg",
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
        entryUrl: "https://mxtoolbox.com/Public/Login.aspx?page=pp",
    }

    constructor() {
        super(MxToolboxCollector.CONFIG);
    }
}
