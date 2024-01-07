import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://cdn.iconscout.com/icon/free/png-256/free-account-avatar-profile-human-man-user-30448.png?f=webp"
        ></Image>
        <Dropdown pointing="top left" text="Erdo">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={signOut}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
