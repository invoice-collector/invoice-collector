
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SaveEnergiesCollector extends SketchCollector {

    static CONFIG = {
        id: "save_energies",
        name: "Save Energies",
        description: "i18n.collectors.save_energies.description",
        version: "0",
        website: "https://espaceclients.save-energies.fr/web/guest/home?p_p_state=maximized&p_p_mode=view&refererPlid=206189&saveLastPath=false&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin&p_p_id=com_liferay_login_web_portlet_LoginPortl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2584140.jpg",
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
        loginUrl: "https://espaceclients.save-energies.fr/web/guest/home?p_p_state=maximized&p_p_mode=view&refererPlid=206189&saveLastPath=false&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin&p_p_id=com_liferay_login_web_portlet_LoginPortl",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SaveEnergiesCollector.CONFIG);
    }
}
