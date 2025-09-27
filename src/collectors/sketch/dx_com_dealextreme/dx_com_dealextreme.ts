
import { SketchCollector } from '../../sketchCollector';

export class DxComDealextremeCollector extends SketchCollector {

    static CONFIG = {
        id: "dx_com_dealextreme",
        name: "dx.com - DealeXtreme",
        description: "i18n.collectors.dx_com_dealextreme.description",
        version: "0",
        website: "https://passport.dx.com/?redirect=http%3A%2F%2Fwww.dx.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38312.jpg",
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
        entryUrl: "https://passport.dx.com/?redirect=http%3A%2F%2Fwww.dx.com%2F",
    }

    constructor() {
        super(DxComDealextremeCollector.CONFIG);
    }
}
