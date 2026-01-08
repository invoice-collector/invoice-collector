
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdvanceAutoPartsEbillCollector extends SketchCollector {

    static CONFIG = {
        id: "advance_auto_parts_ebill",
        name: "Advance Auto Parts eBill",
        description: "i18n.collectors.advance_auto_parts_ebill.description",
        version: "0",
        website: "https://ebill.advancecommercial.com/psp/ebill/CUSTOMER/ASC_ARP/c/ASC_CUSTOM_AR.ASC_EBILL_SEARCH.GBL?FolderPath=PORTAL_ROOT_OBJECT.ASC_EBILL_SEARCH&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4447087.jpg",
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
        loginUrl: "https://ebill.advancecommercial.com/psp/ebill/CUSTOMER/ASC_ARP/c/ASC_CUSTOM_AR.ASC_EBILL_SEARCH.GBL?FolderPath=PORTAL_ROOT_OBJECT.ASC_EBILL_SEARCH&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdvanceAutoPartsEbillCollector.CONFIG);
    }
}
