import React from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import BaseComponent from '../../../Core/View/BaseComponent';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import MyView from '../../../Core/View/MyView';
import { scale, verticalScale, fontSize } from '../../../Config/RatioScale';

export default class PopupRemoteMemberGroup extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            isUserAdmin: false,
            sectionIndex: 0
        }
        this.onRemoveMemberClick = this.onRemoveMemberClick.bind(this);
        this.onViewProfileClick = this.onViewProfileClick.bind(this);
        this.onRemoveAdministrator = this.onRemoveAdministrator.bind(this);
        this.onSetAdministrator = this.onSetAdministrator.bind(this);
        this.onRemoveSecretary = this.onRemoveSecretary.bind(this);
        this.onSetSecretary = this.onSetSecretary.bind(this);
    }

    // shouldComponentUpdate(){
    //     return false;
    // }

    render() {
        let {
            isUserAdmin,
            sectionIndex
         } = this.state;
        console.log('isUserAdmin.render', isUserAdmin);

        const slideAnimation = new SlideAnimation({
            slideFrom: 'bottom',
        });
        return (
            <PopupDialog
                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                dialogAnimation={slideAnimation}
                containerStyle={{ position: 'absolute', bottom: 0 }}
                dialogStyle={[styles.popup_style,
                {
                    height: this.getPopupHeight(isUserAdmin, sectionIndex)
                }]}>
                <View style={styles.container}>
                    <View style={styles.container_content}>

                        {/* <MyView hide={sectionIndex != 2}>
                            <Touchable style={styles.touchable_item} onPress={this.onRemoveAdministrator}>
                                <Text allowFontScaling={global.isScaleFont} style={styles.text_view_image}>{this.t('remove_administrator')}</Text>
                            </Touchable>
                            <View style={styles.line} />
                        </MyView> */}

                        <MyView hide={sectionIndex != 1 || !isUserAdmin}>
                            <Touchable style={styles.touchable_item} onPress={this.onSetAdministrator}>
                                <Text allowFontScaling={global.isScaleFont} style={styles.text_view_image}>{this.t('set_team_owner')}</Text>
                            </Touchable>
                            <View style={styles.line} />
                        </MyView>

                        <MyView hide={sectionIndex != 1 || !isUserAdmin}>
                            <Touchable style={styles.touchable_item} onPress={this.onRemoveMemberClick}>
                                <Text allowFontScaling={global.isScaleFont} style={styles.text_view_image}>{this.t('remove_member')}</Text>
                            </Touchable>
                            <View style={styles.line} />
                        </MyView>

                        <Touchable style={styles.touchable_item} onPress={this.onViewProfileClick}>
                            <Text allowFontScaling={global.isScaleFont} style={styles.text_view_image}>{this.t('view_profile')}</Text>
                        </Touchable>
                        {/* <View style={styles.line} />

                        <Touchable style={styles.touchable_item} onPress={this.onSendMessageClick.bind(this)}>
                            <Text allowFontScaling={global.isScaleFont} style={styles.text_view_image}>{this.t('send_message')}</Text>
                        </Touchable> */}

                    </View>
                </View>

            </PopupDialog>
        );
    }

    getPopupHeight(isAdmin = false, sectionIndex = 0) {
        if (isAdmin && sectionIndex === 1) {
            return verticalScale(180);
        } else {
            return verticalScale(60);
        }
    }

    show(isModerator = false, sectionIndex = 0) {
        this.setState({
            isUserAdmin: isModerator,
            sectionIndex: sectionIndex
        }, () => {
            this.popupDialog.show();
        })
    }

    dismiss() {
        if (this.popupDialog)
            this.popupDialog.dismiss();
    }

    onRemoveMemberClick() {
        if (this.popupDialog)
            this.popupDialog.dismiss();
        if (this.props.onRemoveMemberClick) {
            this.props.onRemoveMemberClick();
        }
    }

    onViewProfileClick() {
        if (this.popupDialog)
            this.popupDialog.dismiss();
        if (this.props.onViewProfileClick) {
            this.props.onViewProfileClick();
        }
    }

    onSendMessageClick() {
        if (this.popupDialog)
            this.popupDialog.dismiss();
        if (this.props.onSendMessageClick) {
            this.props.onSendMessageClick();
        }
    }

    onRemoveAdministrator() {
        if (this.popupDialog)
            this.popupDialog.dismiss();
        if (this.props.onRemoveAdministrator) {
            this.props.onRemoveAdministrator();
        }
    }

    onSetAdministrator() {
        if (this.popupDialog)
            this.popupDialog.dismiss();
        if (this.props.onSetAdministrator) {
            this.props.onSetAdministrator();
        }
    }

    onRemoveSecretary() {
        if (this.popupDialog)
            this.popupDialog.dismiss();
        if (this.props.onRemoveSecretary) {
            this.props.onRemoveSecretary();
        }
    }

    onSetSecretary() {
        if (this.popupDialog)
            this.popupDialog.dismiss();
        if (this.props.onSetSecretary) {
            this.props.onSetSecretary();
        }
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopLeftRadius: verticalScale(10),
        borderTopRightRadius: verticalScale(10)
    },
    popup_style: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    container_content: {
        backgroundColor: '#FFFFFF',
        borderRadius: verticalScale(10)
    },
    container_btn: {
        backgroundColor: '#FFFFFF',
        borderRadius: verticalScale(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(10)
    },
    text_item: {
        color: '#685D5D',
        fontSize: fontSize(17, scale(3)),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(10)
    },
    text_view_image: {
        color: '#3D3D3D',
        fontSize: fontSize(17, scale(3)),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(10)
    },
    text_exit: {
        color: '#685D5D',
        fontSize: fontSize(17, scale(3)),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(10),
        fontWeight: 'bold',
    },
    line: {
        backgroundColor: '#ADADAD',
        height: 0.5
    },
    touchable_item: {
        justifyContent: 'center',
        paddingLeft: scale(20),
        minHeight: verticalScale(60)
    }

});