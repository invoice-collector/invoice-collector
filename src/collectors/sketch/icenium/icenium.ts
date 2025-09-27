
import { SketchCollector } from '../../sketchCollector';

export class IceniumCollector extends SketchCollector {

    static CONFIG = {
        id: "icenium",
        name: "icenium",
        description: "i18n.collectors.icenium.description",
        version: "0",
        website: "https://www.telerik.com/login/v2/telerik?ReturnUrl=https%3a%2f%2fidentity.telerik.com%2fv2%2foauth%2ftelerik%2fauthorize%3fclient_id%3dhttp%253a%252f%252fwww.lean.telerik.com%26redirect_uri%3dhttps%253a%252f%252fwww.telerik.com%252faccount%26response_type",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/541.jpg",
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
        entryUrl: "https://www.telerik.com/login/v2/telerik?ReturnUrl=https%3a%2f%2fidentity.telerik.com%2fv2%2foauth%2ftelerik%2fauthorize%3fclient_id%3dhttp%253a%252f%252fwww.lean.telerik.com%26redirect_uri%3dhttps%253a%252f%252fwww.telerik.com%252faccount%26response_type",
    }

    constructor() {
        super(IceniumCollector.CONFIG);
    }
}
