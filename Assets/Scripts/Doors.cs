using UnityEngine;
using System.Collections;

public class Doors : MonoBehaviour {

    Animator animator;
    bool doorOpen;

    void Start()
    {
        doorOpen = false;
        animator = GetComponent<Animator>();
    }

    void OnTriggerEnter(Collider col)
    {
        if(col.gameObject.tag == "Player" /* && Input.GetButton("AButton")*/)
        {
            //if (Input.GetKeyDown("f") == true)
            {
                doorOpen = true;
                DoorControl("Open");
            }
        }
    }

    void OnTriggerExit(Collider col)
    {
        if(doorOpen /* && Input.GetButton("BButton")*/)
        {
           // if (Input.GetKeyDown("g"))
            {
                doorOpen = false;
                DoorControl("Close");
            }
        }
    }

    void DoorControl(string direction)
    {
        animator.SetTrigger(direction);
    }
}

