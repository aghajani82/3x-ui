package panel

import (
	"strings"
	"testing"
)

func TestForkPanelUpdateOrigin(t *testing.T) {
	if forkRepo != "aghajani82/3x-ui" {
		t.Fatalf("forkRepo = %q, want aghajani82/3x-ui", forkRepo)
	}
	if want := "https://raw.githubusercontent.com/" + forkRepo + "/main/update.sh"; panelUpdaterURL != want {
		t.Fatalf("panelUpdaterURL = %q, want %q", panelUpdaterURL, want)
	}
	if want := "https://api.github.com/repos/" + forkRepo + "/releases"; panelReleaseAPI != want {
		t.Fatalf("panelReleaseAPI = %q, want %q", panelReleaseAPI, want)
	}
	if strings.Contains(panelUpdaterURL, "MHSanaei/3x-ui") || strings.Contains(panelReleaseAPI, "MHSanaei/3x-ui") {
		t.Fatal("panel updater must not point back to the upstream project")
	}
}
